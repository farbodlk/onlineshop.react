import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "تحویل در سراسر ایران",
      decs: "ما قیمت های رقابتی را برای محصولات 100 میلیونی خود در هر محدوده ای ارائه می دهیم.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "پرداخت امن",
      decs: "ما قیمت های رقابتی را برای محصولات 100 میلیونی خود در هر محدوده ای ارائه می دهیم.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "با اطمینان خرید کنید ",
      decs: "ما قیمت های رقابتی را برای محصولات 100 میلیونی خود در هر محدوده ای ارائه می دهیم.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: " پشتیبانی 24/7",
      decs: "ما قیمت های رقابتی را برای محصولات 100 میلیونی خود در هر محدوده ای ارائه می دهیم.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
