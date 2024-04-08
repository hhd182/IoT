function RenderData(setListData, listData, data, setIsLoading, setIsRender, setData, setTime, time) {
    let nhietDo = Math.floor(Math.random() * 151);
    let doAm = Math.floor(Math.random() * 101);
    let anhSang = Math.floor(Math.random() * 251);
    setTime(time + 1)
    let dt = {
        temp: nhietDo,
        hum: doAm,
        light: anhSang,
        time: time
    }
    setData(dt)
    setListData(...listData, data)
    setIsRender(false);
    setIsLoading(false)
    return;
}

export { RenderData }