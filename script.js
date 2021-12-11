window.addEventListener('load', function () {
    const api_key = "fC3cZCNnxmm2XhLzL83Oy4R1PTwysBg5UIiWkzvs"
    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response)

            $('#titulo').text(response.title)
            $('#pic').attr('src', response.url)
            $('#descrip').text(response.explanation)
            $('#copyName').text(response.copyright)
        }
    })
})

function consultaSpace() {


    var spaceDay = document.querySelector('#spaceDay').value
    const api_key = "fC3cZCNnxmm2XhLzL83Oy4R1PTwysBg5UIiWkzvs"
    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${spaceDay}`
    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response.status)

            $('#titulo').text(response.title)
            $('#pic').attr('src', response.url)
            $('#descrip').text(response.explanation)
            $('#copyName').text(response.copyright)

            
            
        }
    })
    
}
