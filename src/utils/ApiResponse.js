class ApiResponse {
    constructor(statuscode, data, message = "Sucess"){
        this.statuscode = statuscode
        this.data = datathis.messafe = message
        this.message =message
        this.success = statuscode<400
    }
}