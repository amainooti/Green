import React from 'react'

function CustomBtn({onClickItem, btnPadding, btnContent}) {
  return (
    <button onClick={onClickItem} className = {` px-12 py-3 bg-white/10 uppercase text-white rounded-md animate-pulse font-bold ${btnPadding} border-solid border-2 border-white z-10000 hover:bg-inherit`}> {btnContent} </button>
  );
}

export default CustomBtn;