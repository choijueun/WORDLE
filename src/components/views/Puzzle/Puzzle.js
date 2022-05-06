import React from 'react'
import './Puzzle.css'

function PuzzleBlock() {
    return (
        <div class="row">
            <div className="Puzzle block-word text-center round">사</div>
            <div className="Puzzle block-word text-center round">자</div>
            <div className="Puzzle block-word text-center round">성</div>
            <div className="Puzzle block-word text-center round">어</div>
        </div>
    )
}

function Puzzle() {
    return (
        <section id="PUZZLE" className="item-center">
            <PuzzleBlock/>
            <PuzzleBlock/>
            <PuzzleBlock/>
            <PuzzleBlock/>
            <PuzzleBlock/>
        </section>
    )
}

export default Puzzle