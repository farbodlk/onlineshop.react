import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/downloud.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.pg",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-1.pg",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.ng",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.pg",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-2.pg",
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
