import React, { Component } from 'react';

class FloatingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    // Thêm sự kiện di chuyển chuột khi component được mount
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    // Xóa sự kiện di chuyển chuột khi component bị unmount
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (event) => {
    // Cập nhật vị trí của chuột vào state
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  handleClick = () => {
    // Chuyển hướng đến trang HTML khác
    window.location.href = 'https://www.example.com'; // Thay đổi URL tại đây
  };

  render() {
    const { x, y } = this.state;

    return (
      <div>
        <button
          style={{
            position: 'absolute',
            left: x + 10, // Thêm một chút khoảng cách để button không bị dính vào con trỏ chuột
            top: y + 10,
          }}
          onClick={this.handleClick}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default FloatingButton;
