import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


import { shallow } from 'enzyme';


let wrapper: any;

beforeEach(() => {
  wrapper = shallow(<App />)
})

describe("Counter Testing", () =>{

  test("render the counter test", () => {
    expect(wrapper.find("h1").text()).toContain("This is a counter app")

  })

  test("render a button with text increment", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment")
  })

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0")
  })

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("1")
  })

  test("render the clicj event decrement button counter",() => {

    wrapper.find("#increment-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("1")
    wrapper.find("#decrement-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("0")

  })
  
})

