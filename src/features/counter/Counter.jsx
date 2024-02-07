import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCard, sortCard, dellCard, takeIt} from './counterSlice'
import s from "./counter.module.css"

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  useEffect(() => {

    if (localStorage.getItem("arr") == null) {
      
    }else{
      dispatch(takeIt())
    }

    localStorage.getItem("arr")


  },[])


  return (
    <div>
      <div className={s.addCard}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(addCard())}
        >
          add card
        </button>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(sortCard())}
        >
          sort card
        </button>
      </div>

      <div className={s.cardsDiv}>
        
            {
                count.map((i , index) => {

                   
                    
                    return  <div className={s.card}>
                              <div onClick={() => dispatch(dellCard(index))} className={s.delBtn} >x</div>
                              <div className={s.num}>{i}</div>

                            </div>
                     

                })

                
            }


      </div>
    </div>
  )
}