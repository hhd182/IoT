import { PrismaClient } from '@prisma/client';
import { convertDateFormat } from '../logic/logic.js';

const prisma = new PrismaClient();

export const newAction = async (req, res) => {
    try {
        const { device, action } = req.body;
        if (!action) {
            throw new Error("Missing 'action' of fan field in request body.");
        }
        const result = await prisma.actionHistory.create({
            data: {
                device,
                action
            }
        });
        return res.status(200).json(result);
    } catch (error) {
        console.error("Error creating new data sensor:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const getDataAction = async (req, res) => {
    try {
        const { dayStart, dayEnd, page } = req.query;
        let isSearch = false
        let startDay, endDay;

        const pageNumber = parseInt(page, 10);
        if (isNaN(pageNumber) || pageNumber < 1) {
            return res.status(400).json({ error: "Invalid 'page' parameter" });
        }
        const next = (pageNumber - 1) * 10;
        if (dayStart && dayEnd) {
            isSearch = true;
            startDay = convertDateFormat(dayStart)
            endDay = convertDateFormat(dayEnd)
        }

        const valueSearch = { createdAt: { gte: new Date(startDay), lte: new Date(endDay) } }

        const data = await prisma.actionHistory.findMany({
            where: isSearch ? valueSearch : {},
            skip: next,
            take: 10,
            orderBy: {
                createdAt: 'desc'
            }
        });

        if (!data || data.length === 0) {
            return res.status(404).json({ error: `No data from ${dayStart} to ${dayEnd}` });
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error("Error searching data in actionHistory:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
