import React from 'react'
import { mount } from 'enzyme'
import App from '../App'
import Blog from './Blog'

jest.mock('../services/blogs')
import blogService from '../services/blogs'

console.log(blogService.blogs)

describe.only('integration tests', () => {
    let app
    beforeAll(() => {
        app = mount(<App />)
    })


    it('Blogs are not shown when user not signed in', () => {
        app.update()
        console.log("App initialized")

        expect(app.text()).not.toContain('Author:')
        expect(app.text()).not.toContain('Address:')
        expect(app.text()).not.toContain('Likes:')

        const blogs = app.find('.blogpost')
        expect(blogs.length).toBe(0)
    })



})
