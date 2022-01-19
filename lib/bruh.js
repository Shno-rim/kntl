var urlWaifuZeroChan = ''
let waifu1 = []

await fetch('https://www.zerochan.net/'+ encodeURIComponent(numberSearchWaifu) , { 
                    method: 'get' 
                }) 
                .then(res => res.text()) 
                .then(res => {
                    const $ = cheerio.load(res)
                    if($('p#fullMessage').text() == "No such tag. Back to Index") return console.log('Not Found')
                    $("head").each((i, data1) => {
                        $(data1).find("link").each(function(a, b) {
                            if($(b).attr("rel") == ("canonical")) {
                                urlWaifuZeroChan = $(b).attr('href')
                            }
                        })
                    })
                    $("#thumbs2").each((i, data) => {
                        $(data).find("li").each(function(c, d) {
                            $(d).find("p").each(function(e, f) {
                                $(f).each(function(g, h) {
                                    $(h).find("a").each(function(i, j) {
                                        if($(j).attr('href').startsWith('http')) {
                                            waifu1.push($(j).attr('href'))
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
    
                // Jika url Zerochan bukan null, Maka scrape 10 halaman selanjutnya
                if(urlWaifuZeroChan != '') {
                    for(let i = 0; i < 9; i++) {
                        await fetch(urlWaifuZeroChan + `?p=${i+1}` , { 
                            method: 'get' 
                        }) 
                        .then(res => res.text()) 
                        .then(res => {
                            const $ = cheerio.load(res)
                            $("#thumbs2").each((i, data) => {
                                $(data).find("li").each(function(c, d) {
                                    $(d).find("p").each(function(e, f) {
                                        $(f).each(function(g, h) {
                                            $(h).find("a").each(function(i, j) {
                                                if($(j).attr('href').startsWith('http')) {
                                                    waifu1.push($(j).attr('href'))
                                                }
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }
                } else {
                    //Jika url Zerochan null, maka lakukan pencarian
                    await fetch('https://www.zerochan.net/search?q='+ encodeURIComponent(numberSearchWaifu) , { 
                        method: 'get' 
                    }) 
                    .then(res => res.text()) 
                    .then(res => {
                        const $ = cheerio.load(res)
                        $("#content").each((i, data2) => {
                            $(data2).find("p").each(function(k, l) {
                                if($(l).attr('style') == 'text-align: center;' ) {
                                    if($(l).text() == 'Some content is for members only, please ') {
                                        return console.log('Not Found2')
                                    }
                                }
                            })
                        })
                        $("head").each((i, data1) => {
                            $(data1).find("link").each(function(a, b) {
                                if($(b).attr("rel") == ("canonical")) {
                                    urlWaifuZeroChan = $(b).attr('href')
                                }
                            })
                        })
                        $("#thumbs2").each((i, data) => {
                            $(data).find("li").each(function(c, d) {
                                $(d).find("p").each(function(e, f) {
                                    $(f).each(function(g, h) {
                                        $(h).find("a").each(function(i, j) {
                                            if($(j).attr('href').startsWith('http')) {
                                                waifu1.push($(j).attr('href'))
                                            }
                                        })
                                    })
                                })
                            })
                        })
                    })
        
                    if(urlWaifuZeroChan != '') {
                    for(let i = 0; i < 9; i++) {
                        await fetch(urlWaifuZeroChan + `?p=${i+1}` , { 
                            method: 'get' 
                        }) 
                        .then(res => res.text()) 
                        .then(res => {
                            const $ = cheerio.load(res)
                            $("#thumbs2").each((i, data) => {
                                $(data).find("li").each(function(c, d) {
                                    $(d).find("p").each(function(e, f) {
                                        $(f).each(function(g, h) {
                                            $(h).find("a").each(function(i, j) {
                                                if($(j).attr('href').startsWith('http')) {
                                                    waifu1.push($(j).attr('href'))
                                                }
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }
                    }
                }