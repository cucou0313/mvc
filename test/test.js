const {
    app
} = require('../server.js');

const request = require('supertest');

describe("app", () => {
    describe("get request", () => {
        it("test get all Todos", (done) => {
            request(app).get('/').expect(200).expect([{
                "id": 1,
                "content": "Restful API homework",
                "createdTime": "Thu Mar 19 2020 17:40:25 GMT+0800 (中国标准时间)"
            }, {
                "id": 2,
                "content": "Restful API homework",
                "createdTime": "Thu Mar 19 2020 17:40:37 GMT+0800 (中国标准时间)"
            }, {
                "id": 3,
                "content": "Restful API homework",
                "createdTime": "Thu Mar 19 2020 17:40:42 GMT+0800 (中国标准时间)"
            }, {
                "id": 4,
                "content": "test",
                "createdTime": "Sat Mar 21 2020 09:30:42 GMT+0800 (中国标准时间)"
            }]).end((err, res) => {
                if (err) throw err;
                done()
            })
        })

        it("test get Todo by id", (done) => {
            request(app).get('/:1').expect(200).expect({
                "id": 1,
                "content": "Restful API homework",
                "createdTime": "Thu Mar 19 2020 17:40:25 GMT+0800 (中国标准时间)"
            }).end((err, res) => {
                if (err) throw err;
                done()
            })
        })
    })
})