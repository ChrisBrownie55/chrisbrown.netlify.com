import React from 'react';
import FlipCard from '../components/FlipCard';
import FlatButton from '../components/FlatButton';

async function flipAllCards() {
  let count = 0;
  const delay = () => new Promise(resolve => setTimeout(resolve, 50*count++));
  const flipCards = document.getElementsByClassName('FlipCard-content');

  for (const flipCard of flipCards) {
    await delay();
    flipCard.click();
  }
}

const Expertise = () => (
  <section classlabel="expertise">
    <h1 classlabel="expertise__title title">Expertise</h1>
    <h2 classlabel="expertise__subtitle">What am I skilled at?</h2>
    <p classlabel="expertise__hint">You can click the cards to flip them.</p>
    <section classlabel="expertise__skills">
      <FlipCard label="CSS3" years="3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220.5 199.5">
          <path fill="var(--theme-primary)" d="M32.8 0l-7.4 37H176l-4.7 23.9H20.6l-7.3 37h150.6l-8.4 42.2-60.7 20.1-52.6-20.1 3.6-18.3h-37L0 166.2l87 33.3 100.3-33.3 13.3-66.8 2.7-13.4 17.1-86z" />
        </svg>
      </FlipCard>
      <FlipCard label="JavaScript" years="3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 73">
          <path fill="var(--theme-primary)" d="M0 0h73v73H0V0m19.183 60.996c1.622 3.447 4.826 6.286 10.3 6.286 6.084 0 10.261-3.245 10.261-10.342V33.499H32.85v23.279c0 3.488-1.42 4.38-3.65 4.38-2.352 0-3.326-1.622-4.42-3.529l-5.597 3.367m24.252-.73c2.028 3.974 6.124 7.016 12.532 7.016 6.489 0 11.355-3.366 11.355-9.571 0-5.719-3.285-8.274-9.125-10.788l-1.703-.73c-2.96-1.257-4.218-2.11-4.218-4.137 0-1.663 1.257-2.96 3.285-2.96 1.947 0 3.245.851 4.42 2.96l5.313-3.528c-2.23-3.894-5.393-5.394-9.733-5.394-6.124 0-10.058 3.893-10.058 9.044 0 5.596 3.285 8.233 8.233 10.341l1.703.73c3.164 1.38 5.03 2.231 5.03 4.583 0 1.947-1.826 3.366-4.665 3.366-3.366 0-5.312-1.744-6.772-4.177l-5.597 3.245" />
        </svg>
      </FlipCard>
      <FlipCard label="HTML5" years="3.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 72">
          <path fill="var(--theme-primary)" d="M51.343 21.133l.746-7.895H11.911l2.138 24.022H41.84l-.984 10.28-8.959 2.386-8.89-2.385-.611-6.317h-7.941l.984 12.532 16.458 4.469h.204v-.034l16.288-4.435 2.274-24.492H21.413l-.68-8.131h30.61M0 0h64l-5.837 64.71L31.898 72 5.803 64.71 0 0" />
        </svg>
      </FlipCard>
      <FlipCard label="Vue.js" years="1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="37.5 37.5 325 325">
          <path fill="var(--theme-primary)" d="M237.417 86.655l-30.226 52.352-30.225-52.352H76.311l130.88 226.69 130.88-226.69z" />
          <path fill="#584b26" d="M237.417 86.655l-30.226 52.352-30.225-52.352h-48.303l78.528 136.014L285.72 86.655z" />
        </svg>
      </FlipCard>
      <FlipCard label="React.js" years="1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 64">
          <path fill="var(--theme-primary)" d="M36 25.711c3.45 0 6.262 2.795 6.262 6.289 0 3.327-2.813 6.156-6.262 6.156-3.45 0-6.262-2.829-6.262-6.156 0-3.494 2.813-6.289 6.262-6.289M20.495 58.62c2.11 1.265 6.731-.665 12.056-5.656a80.678 80.678 0 0 1-5.057-6.322 76.475 76.475 0 0 1-8.037-1.198c-1.708 7.12-1.072 12.012 1.038 13.176m2.378-19.099l-.972-1.697c-.368.965-.736 1.93-.97 2.862.903.2 1.908.366 2.946.532l-1.004-1.697m21.901-2.529L47.486 32l-2.712-4.991c-1.005-1.764-2.076-3.328-3.047-4.892-1.809-.1-3.718-.1-5.727-.1-2.01 0-3.918 0-5.727.1-.97 1.564-2.042 3.128-3.047 4.892L24.514 32l2.712 4.991c1.005 1.764 2.076 3.328 3.047 4.892 1.809.1 3.718.1 5.727.1 2.01 0 3.918 0 5.727-.1.97-1.564 2.042-3.128 3.047-4.892M36 14.631c-.636.732-1.306 1.497-1.976 2.396h3.952c-.67-.899-1.34-1.664-1.976-2.396m0 34.738c.636-.732 1.306-1.497 1.976-2.396h-3.952c.67.899 1.34 1.664 1.976 2.396M51.472 5.381c-2.077-1.265-6.698.665-12.023 5.656a80.678 80.678 0 0 1 5.057 6.322c2.746.266 5.459.666 8.037 1.198 1.708-7.12 1.072-12.012-1.071-13.176M49.127 24.48l.972 1.697c.368-.965.736-1.93.97-2.862-.903-.2-1.908-.366-2.946-.532l1.004 1.697m4.856-23.458c4.923 2.795 5.459 10.148 3.383 18.733C65.872 22.251 72 26.377 72 32c0 5.623-6.128 9.75-14.634 12.245 2.076 8.585 1.54 15.938-3.383 18.733C49.094 65.773 42.43 62.58 36 56.49c-6.43 6.09-13.094 9.283-18.017 6.488-4.889-2.795-5.425-10.148-3.349-18.733C6.128 41.749 0 37.623 0 32c0-5.623 6.128-9.75 14.634-12.245-2.076-8.585-1.54-15.938 3.35-18.733C22.905-1.773 29.57 1.42 36 7.51c6.43-6.09 13.094-9.283 17.983-6.488M53.013 32c1.138 2.496 2.142 4.991 2.98 7.52 7.032-2.096 10.984-5.091 10.984-7.52 0-2.429-3.952-5.424-10.984-7.52-.838 2.529-1.842 5.024-2.98 7.52m-34.025 0c-1.139-2.496-2.143-4.991-2.98-7.52C8.974 26.576 5.022 29.571 5.022 32c0 2.429 3.952 5.424 10.984 7.52.838-2.529 1.842-5.024 2.98-7.52m30.14 7.52l-1.004 1.697c1.038-.166 2.043-.333 2.947-.532-.235-.932-.603-1.897-.971-2.862l-.972 1.697M39.45 52.963c5.325 4.99 9.946 6.92 12.023 5.656 2.143-1.164 2.78-6.056 1.071-13.176a76.475 76.475 0 0 1-8.037 1.198 80.678 80.678 0 0 1-5.057 6.322M22.873 24.48l1.004-1.697c-1.038.166-2.043.333-2.947.532.235.932.603 1.897.971 2.862l.972-1.697m9.678-13.443c-5.325-4.991-9.946-6.92-12.056-5.656-2.11 1.164-2.746 6.056-1.038 13.176a76.475 76.475 0 0 1 8.037-1.198 80.678 80.678 0 0 1 5.057-6.322" />
        </svg>
      </FlipCard>
      <FlipCard label="Node.js" years="1.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 72">
          <path fill="var(--theme-primary)" d="M32 0c-.96 0-1.956.248-2.773.71L2.773 15.96A5.596 5.596 0 0 0 0 20.785v30.432a5.596 5.596 0 0 0 2.773 4.823l6.934 3.973c3.377 1.631 4.515 1.667 6.08 1.667 4.977 0 7.857-3.015 7.857-8.264V23.373a.788.788 0 0 0-.782-.78h-3.306c-.463 0-.818.355-.818.78v30.042c0 2.34-2.418 4.646-6.294 2.695l-7.288-4.15a.925.925 0 0 1-.392-.744V20.784c0-.319.143-.603.392-.745L31.609 4.824a.772.772 0 0 1 .782 0l26.453 15.215c.25.142.392.426.392.745v30.432a.925.925 0 0 1-.392.745L32.391 67.176c-.213.142-.569.142-.818 0l-6.684-4.043c-.285-.106-.569-.142-.747-.036-1.884 1.065-2.24 1.277-3.982 1.81-.427.141-1.102.39.249 1.134l8.818 5.214A5.42 5.42 0 0 0 32 72a5.42 5.42 0 0 0 2.773-.745L61.227 56.04A5.597 5.597 0 0 0 64 51.216V20.784a5.597 5.597 0 0 0-2.773-4.823L34.773.709A5.656 5.656 0 0 0 32 0m7.111 21.813c-7.538 0-12.053 3.157-12.053 8.477 0 5.71 4.48 7.377 11.733 8.086 8.64.852 9.316 2.128 9.316 3.83 0 2.945-2.383 4.186-7.93 4.186-7.04 0-8.533-1.738-9.066-5.214a.801.801 0 0 0-.782-.638h-3.413c-.427 0-.747.32-.747.78 0 4.398 2.418 9.718 14.009 9.718 8.355 0 13.155-3.298 13.155-9.044 0-5.71-3.84-7.2-11.982-8.3-8.213-1.064-9.031-1.63-9.031-3.546 0-1.596.711-3.724 6.791-3.724 5.333 0 7.431 1.17 8.249 4.823a.76.76 0 0 0 .747.603h3.449c.177 0 .39-.07.533-.248.142-.142.249-.355.178-.567-.498-6.314-4.694-9.222-13.156-9.222" />
        </svg>
      </FlipCard>
      <FlipCard label="C#" years="1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="var(--theme-primary)" d="M496 159.211H365.232v19.383h53.944v167.195h22.885V178.594H496zm-152.837 19.383v-19.383h-99.94v186.578h99.94v-19.391h-77.058V261.25h68.654v-19.383h-68.654v-63.273zM48.227 336.68c0 8.898-7.212 16.109-16.109 16.109-8.902 0-16.117-7.211-16.117-16.109 0-8.906 7.215-16.109 16.117-16.109 8.896-.001 16.109 7.202 16.109 16.109zm169.005-177.469h-22.888v147.297L89.102 159.211H66.217v186.578h22.885V198.633L194.42 345.789h22.812z" />
        </svg>
      </FlipCard>
      <FlipCard label="MySQL" years="1">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 252">
          <path fill="var(--theme-primary)" d="M235.648 194.212c-13.918-.347-24.705 1.045-33.752 4.872-2.61 1.043-6.786 1.044-7.134 4.35 1.392 1.392 1.566 3.654 2.784 5.567 2.09 3.479 5.741 8.177 9.047 10.614 3.653 2.783 7.308 5.566 11.134 8.002 6.786 4.176 14.442 6.611 21.053 10.787 3.829 2.434 7.654 5.568 11.482 8.177 1.914 1.39 3.131 3.654 5.568 4.523v-.521c-1.219-1.567-1.567-3.828-2.784-5.568-1.738-1.74-3.48-3.306-5.22-5.046-5.045-6.784-11.308-12.7-18.093-17.571-5.567-3.828-17.747-9.047-20.008-15.485 0 0-.175-.173-.348-.347 3.827-.348 8.35-1.74 12.005-2.784 5.915-1.567 11.308-1.218 17.398-2.784 2.783-.696 5.567-1.566 8.35-2.436v-1.565c-3.13-3.132-5.392-7.307-8.698-10.265-8.873-7.657-18.617-15.137-28.707-21.4-5.394-3.48-12.354-5.742-18.095-8.699-2.086-1.045-5.567-1.566-6.784-3.306-3.133-3.827-4.873-8.872-7.134-13.396-5.044-9.57-9.917-20.182-14.267-30.272-3.13-6.786-5.044-13.572-8.872-19.834-17.92-29.577-37.406-47.497-67.33-65.07-6.438-3.653-14.093-5.219-22.27-7.132-4.348-.175-8.699-.522-13.048-.697-2.784-1.218-5.568-4.523-8.004-6.089C34.006 4.573 8.429-8.996 1.122 8.924c-4.698 11.308 6.96 22.442 10.96 28.185 2.96 4.001 6.786 8.524 8.874 13.048 1.218 2.956 1.565 6.09 2.783 9.221 2.785 7.653 5.393 16.18 9.048 23.314 1.914 3.653 4.001 7.48 6.437 10.786 1.392 1.913 3.827 2.784 4.35 5.915-2.435 3.48-2.61 8.7-4.003 13.049-6.263 19.66-3.826 44.017 5.046 58.457 2.783 4.348 9.395 13.92 18.268 10.265 7.83-3.131 6.09-13.048 8.35-21.747.524-2.09.176-3.48 1.219-4.872v.349c2.436 4.87 4.871 9.569 7.133 14.44 5.394 8.524 14.788 17.398 22.617 23.314 4.177 3.13 7.482 8.524 12.702 10.438v-.523h-.349c-1.044-1.566-2.61-2.261-4.001-3.48-3.131-3.13-6.612-6.958-9.047-10.438-7.306-9.744-13.745-20.53-19.486-31.665-2.783-5.392-5.22-11.308-7.481-16.701-1.045-2.09-1.045-5.22-2.784-6.263-2.61 3.827-6.437 7.133-8.351 11.83-3.304 7.481-3.653 16.702-4.871 26.27-.696.176-.349 0-.697.35-5.566-1.394-7.48-7.134-9.569-12.006-5.22-12.352-6.09-32.186-1.565-46.452 1.218-3.654 6.438-15.136 4.35-18.616-1.044-3.306-4.525-5.22-6.438-7.829-2.261-3.306-4.698-7.48-6.263-11.135-4.176-9.743-6.264-20.53-10.787-30.273-2.088-4.524-5.74-9.22-8.699-13.396-3.305-4.697-6.959-8.004-9.569-13.571-.869-1.913-2.088-5.045-.696-7.133.348-1.392 1.043-1.913 2.436-2.261 2.262-1.915 8.7.521 10.96 1.565 6.438 2.608 11.831 5.046 17.225 8.699 2.435 1.74 5.045 5.046 8.176 5.916h3.654c5.568 1.217 11.83.348 17.05 1.913 9.222 2.957 17.572 7.307 25.054 12.005 22.792 14.44 41.58 34.97 54.282 59.501 2.088 4 2.957 7.656 4.871 11.83 3.655 8.526 8.178 17.225 11.83 25.576 3.654 8.176 7.133 16.528 12.353 23.314 2.61 3.652 13.048 5.567 17.746 7.481 3.48 1.565 8.874 2.958 12.005 4.871 5.915 3.652 11.83 7.83 17.398 11.83 2.784 2.088 11.482 6.438 12.005 9.917z" />
          <path fill="var(--theme-primary)" d="M58.186 43.022c-2.957 0-5.044.35-7.132.871v.348h.348c1.393 2.784 3.827 4.698 5.566 7.133 1.393 2.783 2.61 5.568 4.003 8.352.173-.175.347-.348.347-.348 2.437-1.741 3.654-4.524 3.654-8.7-1.044-1.217-1.218-2.435-2.088-3.653-1.043-1.741-3.306-2.61-4.698-4.003z" />
        </svg>
      </FlipCard>
    </section>
    <FlatButton classlabel="expertise__flip-button" onClick={flipAllCards}>Flip all cards</FlatButton>
  </section>
);

export default React.memo(Expertise);
