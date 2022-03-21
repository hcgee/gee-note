# Portals 实现一个 Modal 框

官网 [Portals](https://react.docschina.org/docs/portals.html)  
### 使用
```js

<Modal
  title="添加好友"
  visible={visible}
  onCancel={() => {
    setVisible(false);
  }}
  onOk={() => {
    setVisible(false);
  }}
>
  <div>添加好友</div>
</Modal>
```
### js
```js
import React from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.less";

export interface ModalProps {
  /** 对话框是否可见 */
  visible?: boolean;
  /** 确定按钮 loading */
  confirmLoading?: boolean;
  /** 标题 */
  title?: React.ReactNode | string;
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean;
  /** 点击确定回调 */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调 */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  afterClose?: () => void;
  /** 垂直居中 */
  centered?: boolean;
  /** 宽度 */
  width?: string | number;
  /** 底部内容 */
  footer?: React.ReactNode;
  /** 确认按钮文字 */
  okText?: React.ReactNode;
  /** 取消按钮文字 */
  cancelText?: React.ReactNode;
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean;
  children: any;
}
export default function Modal(props: ModalProps) {
  const {
    visible,
    children,
    title = "标题",
    onCancel,
    closable = true,
    width,
    onOk,
  } = props;
  // 关闭Modal
  const onCancelFn = (e: React.MouseEvent<HTMLElement>) => {
    if (onCancel) {
      onCancel(e);
    }
  };
  const Child = () => {
    return (
      <div>
        <div className={styles["gee-modal-mask"]}></div>
        <div className={styles["gee-modal-wrap"]}>
          <div
            style={width ? { width: `${width}px` } : {}}
            className={styles["gee-modal"]}
          >
            <div className={styles["gee-modal-content"]}>
              <div className={styles["gee-modal-header"]}>
                <div className={styles["gee-modal-title"]}>{title}</div>
                {closable && (
                  <div
                    onClick={(e) => {
                      onCancelFn(e);
                    }}
                    className={styles["gee-modal-close"]}
                  >
                    关闭
                  </div>
                )}
              </div>
              <div className={styles["gee-modal-body"]}>{children}</div>
              <div className={styles["gee-modal-footer"]}>
                <button
                  onClick={(e) => {
                    onCancelFn(e);
                  }}
                >
                  取消
                </button>
                <button
                  onClick={(e) => {
                    if (onOk) {
                      onOk(e);
                    } else {
                      onCancelFn(e);
                    }
                  }}
                >
                  确定
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <>{visible && createPortal(<Child />, document.body)}</>;
}
```

### css
```css
.gee-modal-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
}
.gee-modal-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  .gee-modal {
    background-color: #fff;
    width: 500px;
    border-radius: 4px;
    animation: 500ms slidein;
    .gee-modal-content {
      box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
      .gee-modal-header {
        display: flex;
        justify-content: space-between;
        padding: 16px 24px;
        color: rgba(0, 0, 0, 0.65);
        border-bottom: 1px solid #e8e8e8;
        .gee-modal-close {
          cursor: pointer;
        }
      }

      .gee-modal-body {
        flex: 1;
        padding: 24px;
        font-size: 14px;
        line-height: 1.5;
        word-wrap: break-word;
      }

      .gee-modal-footer {
        padding: 10px 24px;
        text-align: right;
        background: transparent;
        border-top: 1px solid #e8e8e8;
      }
    }
  }
}

@keyframes slidein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```
