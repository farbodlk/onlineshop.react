import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>DOOMSHOP</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>گوگل پلی</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>اپل استور</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>درباره ما </h2>
            <ul>
              <li>مشاغل</li>
              <li>فروشگاهای دیگر از مجموعه ما </li>
              <li>امنینت و حفاظت</li>
              <li>شرایط و ضوابط</li>
              <li>سیاست حفظ حریم خصوصی</li>
            </ul>
          </div>
          <div className='box'>
            <h2>مراقبت از مشتری</h2>
            <ul>
              <li>مدیریت </li>
              <li>نحوه ی خرید </li>
              <li>پیگیری سفارش </li>
              <li>خرید شرکتی وعمده </li>
              <li>مرجوع </li>
            </ul>
          </div>
          <div className='box'>
            <h2>مخاطب</h2>
            <ul>
              <li>ستارخان ,دریان نو, مجمتمع دریان نو</li>
              <li><h3>پست الکترونیک: </h3>farodm2004@gmail.com</li>
              <li>تلفن: +98 9931667159</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
