let express = require('express')
let app = express()
app.use(express.static('dist'))
app.listen(8080, function () {
  console.log('服务启动成功: http://localhost:8080')
})
