const index = require('../routes/index')

const request = require('supertest')
const app = require('../app')
const express = require('express')

app.use(express.urlencoded({ extended: false }))
app.use('/', index)

test('Index route works', done => {
    request(app)
        .get('/')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200, done)
})