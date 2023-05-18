import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "مدوپوشاک",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "الکترونیک",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "ماشین",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "خانه و اشپز خانه",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "کارت هدیه",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "موسیقی",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "سلامتی و زیبایی",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "حیوانات خانگی",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "اسباب بازی",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "مواد غذایی",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "کتاب",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "کمیک",
    },

  ]

  return (
    <>
      <div className='category' >
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
