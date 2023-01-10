const index = require('../routes/index')

const request = require('supertest')
const app = require('../app')
const express = require('express')

app.use(express.urlencoded({ extended: false }))
app.use('/', index)

describe('Sanity test', () => {
    test('1 should equal 1', () => {
        expect(1).toBe(1)
    })
})

test('Index route works', done => {
    request(app)
        .get('/test')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200, done)
})