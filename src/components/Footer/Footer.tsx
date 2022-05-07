import style from './Footer.module.scss'

export const Footer = () => {
  return (
    <div>
      <div className={style.telegram}>Telegram</div>
      <div className={style.buttons}>
        <div>left</div>
        <div>right</div>
      </div>
    </div>
  );
};
