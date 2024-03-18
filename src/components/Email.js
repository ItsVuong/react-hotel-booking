import "./email.css"

const Email = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Cập nhật các thông báo mới nhất!</h1>
      <span className="mailDesc">Đăng ký nhận tin bằng email</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Email của bạn" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Email