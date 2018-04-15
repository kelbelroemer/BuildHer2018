function fetchScore(title, callback) {
  $.ajax({
    url:'http://bechdeltest.com/api/v1/getMoviesByTitle?title=?',
    dataType: 'json',
    data: requestScore(title),
    var rating = {
      rating: response.rating
    }
    callback(rating);
  })
}
