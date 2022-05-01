import React from 'react'
import './Keyboard.css'

function Keyboard() {
  return (
    <section id="VR-KEYBOARD" className="item-center">
        <div className="row item-center">
            <div className="vr-shift inline-block">
                <div id="ㅂ" className="vr-key vr-word text-center round" data-word="ㅂ">ㅂ</div>
                <div id="ㅈ" className="vr-key vr-word text-center round" data-word="ㅈ">ㅈ</div>
                <div id="ㄷ" className="vr-key vr-word text-center round" data-word="ㄷ">ㄷ</div>
                <div id="ㄱ" className="vr-key vr-word text-center round" data-word="ㄱ">ㄱ</div>
                <div id="ㅅ" className="vr-key vr-word text-center round" data-word="ㅅ">ㅅ</div>
            </div>
            <div className="vr-shift disabled inline-block">
                <div id="ㅃ" className="vr-key vr-word text-center round" data-word="ㅃ">ㅃ</div>
                <div id="ㅉ" className="vr-key vr-word text-center round" data-word="ㅉ">ㅉ</div>
                <div id="ㄸ" className="vr-key vr-word text-center round" data-word="ㄸ">ㄸ</div>
                <div id="ㄲ" className="vr-key vr-word text-center round" data-word="ㄲ">ㄲ</div>
                <div id="ㅆ" className="vr-key vr-word text-center round" data-word="ㅆ">ㅆ</div>
            </div>
            <div className="inline-block">
                <div id="ㅛ" className="vr-key vr-word text-center round" data-word="ㅛ">ㅛ</div>
                <div id="ㅕ" className="vr-key vr-word text-center round" data-word="ㅕ">ㅕ</div>
                <div id="ㅑ" className="vr-key vr-word text-center round" data-word="ㅑ">ㅑ</div>
            </div>
            <div className="vr-shift inline-block">
                <div id="ㅐ" className="vr-key vr-word text-center round" data-word="ㅐ">ㅐ</div>
                <div id="ㅔ" className="vr-key vr-word text-center round" data-word="ㅔ">ㅔ</div>
            </div>
            <div className="vr-shift disabled inline-block">
                <div id="ㅒ" className="vr-key vr-word text-center round" data-word="ㅒ">ㅒ</div>
                <div id="ㅖ" className="vr-key vr-word text-center round" data-word="ㅖ">ㅖ</div>
            </div>
        </div>
        <div className="row item-center">
            <div id="ㅁ" className="vr-key vr-word text-center round" data-word="ㅁ">ㅁ</div>
            <div id="ㄴ" className="vr-key vr-word text-center round" data-word="ㄴ">ㄴ</div>
            <div id="ㅇ" className="vr-key vr-word text-center round" data-word="ㅇ">ㅇ</div>
            <div id="ㄹ" className="vr-key vr-word text-center round" data-word="ㄹ">ㄹ</div>
            <div id="ㅎ" className="vr-key vr-word text-center round" data-word="ㅎ">ㅎ</div>
            <div id="ㅗ" className="vr-key vr-word text-center round" data-word="ㅗ">ㅗ</div>
            <div id="ㅓ" className="vr-key vr-word text-center round" data-word="ㅓ">ㅓ</div>
            <div id="ㅏ" className="vr-key vr-word text-center round" data-word="ㅏ">ㅏ</div>
            <div id="ㅣ" className="vr-key vr-word text-center round" data-word="ㅣ">ㅣ</div>
            {/* Delete */}
            <div id="DELETE" className="vr-key vr-btn text-center round">삭제</div>
        </div>
        <div className="row item-center">
            {/* Shift */}
            <div id="SHIFT" className="vr-key vr-btn text-center round">⇧</div>
            <div id="ㅋ" className="vr-key vr-word text-center round" data-word="ㅋ">ㅋ</div>
            <div id="ㅌ" className="vr-key vr-word text-center round" data-word="ㅌ">ㅌ</div>
            <div id="ㅊ" className="vr-key vr-word text-center round" data-word="ㅊ">ㅊ</div>
            <div id="ㅍ" className="vr-key vr-word text-center round" data-word="ㅍ">ㅍ</div>
            <div id="ㅠ" className="vr-key vr-word text-center round" data-word="ㅠ">ㅠ</div>
            <div id="ㅜ" className="vr-key vr-word text-center round" data-word="ㅜ">ㅜ</div>
            <div id="ㅡ" className="vr-key vr-word text-center round" data-word="ㅡ">ㅡ</div>
            {/* Enter */}
            <div id="SUBMIT" className="vr-key vr-btn text-center round">입력</div>
        </div>
    </section>
  )
}

export default Keyboard