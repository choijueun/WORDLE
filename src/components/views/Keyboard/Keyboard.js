import React from 'react'

function Keyboard() {
  return (
    <>
        <div class="row item-center">
            <div class="vr-shift inline-block">
                <div id="ㅂ" class="vr-key vr-word text-center round" data-word="ㅂ">ㅂ</div>
                <div id="ㅈ" class="vr-key vr-word text-center round" data-word="ㅈ">ㅈ</div>
                <div id="ㄷ" class="vr-key vr-word text-center round" data-word="ㄷ">ㄷ</div>
                <div id="ㄱ" class="vr-key vr-word text-center round" data-word="ㄱ">ㄱ</div>
                <div id="ㅅ" class="vr-key vr-word text-center round" data-word="ㅅ">ㅅ</div>
            </div>
            <div class="vr-shift disabled">
                <div id="ㅃ" class="vr-key vr-word text-center round" data-word="ㅃ">ㅃ</div>
                <div id="ㅉ" class="vr-key vr-word text-center round" data-word="ㅉ">ㅉ</div>
                <div id="ㄸ" class="vr-key vr-word text-center round" data-word="ㄸ">ㄸ</div>
                <div id="ㄲ" class="vr-key vr-word text-center round" data-word="ㄲ">ㄲ</div>
                <div id="ㅆ" class="vr-key vr-word text-center round" data-word="ㅆ">ㅆ</div>
            </div>
            <div>
            <div id="ㅛ" class="vr-key vr-word text-center round" data-word="ㅛ">ㅛ</div>
            <div id="ㅕ" class="vr-key vr-word text-center round" data-word="ㅕ">ㅕ</div>
            <div id="ㅑ" class="vr-key vr-word text-center round" data-word="ㅑ">ㅑ</div>
            </div>
            <div class="vr-shift inline-block">
                <div id="ㅐ" class="vr-key vr-word text-center round" data-word="ㅐ">ㅐ</div>
                <div id="ㅔ" class="vr-key vr-word text-center round" data-word="ㅔ">ㅔ</div>
            </div>
            <div class="vr-shift disabled">
                <div id="ㅒ" class="vr-key vr-word text-center round" data-word="ㅒ">ㅒ</div>
                <div id="ㅖ" class="vr-key vr-word text-center round" data-word="ㅖ">ㅖ</div>
            </div>
        </div>
        <div class="row item-center">
            <div id="ㅁ" class="vr-key vr-word text-center round" data-word="ㅁ">ㅁ</div>
            <div id="ㄴ" class="vr-key vr-word text-center round" data-word="ㄴ">ㄴ</div>
            <div id="ㅇ" class="vr-key vr-word text-center round" data-word="ㅇ">ㅇ</div>
            <div id="ㄹ" class="vr-key vr-word text-center round" data-word="ㄹ">ㄹ</div>
            <div id="ㅎ" class="vr-key vr-word text-center round" data-word="ㅎ">ㅎ</div>
            <div id="ㅗ" class="vr-key vr-word text-center round" data-word="ㅗ">ㅗ</div>
            <div id="ㅓ" class="vr-key vr-word text-center round" data-word="ㅓ">ㅓ</div>
            <div id="ㅏ" class="vr-key vr-word text-center round" data-word="ㅏ">ㅏ</div>
            <div id="ㅣ" class="vr-key vr-word text-center round" data-word="ㅣ">ㅣ</div>
            {/* Delete */}
            <div id="DELETE" class="vr-key vr-btn text-center round">삭제</div>
        </div>
        <div class="row item-center">
            {/* Shift */}
            <div id="SHIFT" class="vr-key vr-btn text-center round">⇧</div>
            <div id="ㅋ" class="vr-key vr-word text-center round" data-word="ㅋ">ㅋ</div>
            <div id="ㅌ" class="vr-key vr-word text-center round" data-word="ㅌ">ㅌ</div>
            <div id="ㅊ" class="vr-key vr-word text-center round" data-word="ㅊ">ㅊ</div>
            <div id="ㅍ" class="vr-key vr-word text-center round" data-word="ㅍ">ㅍ</div>
            <div id="ㅠ" class="vr-key vr-word text-center round" data-word="ㅠ">ㅠ</div>
            <div id="ㅜ" class="vr-key vr-word text-center round" data-word="ㅜ">ㅜ</div>
            <div id="ㅡ" class="vr-key vr-word text-center round" data-word="ㅡ">ㅡ</div>
            {/* Enter */}
            <div id="SUBMIT" class="vr-key vr-btn text-center round">입력</div>
        </div>
    </>
  )
}

export default Keyboard