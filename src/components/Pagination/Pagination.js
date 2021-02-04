import React, {useState} from 'react'


const Pagination = (props) => {

    const [state, setState] = useState({
        clicked_index: 1
    })

    const handleClick = (e) => {

        if(!e){
            return false
        }
        console.log(e.target.dataset.index);
        setState({
            ...state,
            clicked_index: e.target.dataset.index
        })

        props.onClick(e.target.dataset.index)
       
    }
   
    // render pagination
    let paginationHtml = []

    if (props.object.totalPages > 10) {

        if(!props.object.hasPrevPage){
            paginationHtml.push(
                <li className="disabled page-item"><a className="page-link"><span className="fa fa-fast-backward"></span></a></li>
            )
        }else{
            paginationHtml.push(
                <li className="page-item"><a onClick={handleClick} data-index={1} className="page-link"><span className="fa fa-fast-backward"></span></a></li>
            )
        }

        if ((props.object.page - 10) < 0) {

            for (let index = 0; index < 10; index++) {
            
                let className = ''
                if (props.object.page == index+1) {
                    className = 'active'
                }

                paginationHtml.push(
                    <li 
                        data-index={index+1}
                        onClick={() => {
                            props.onClick(index+1)
                            handleClick()
                        }} 
                        className={"page-item "+className}
                    >
                        <a className="page-link" onClick={handleClick}  data-index={index+1}>{index+1}</a>
                    </li>
                )
            }
        }
        else{

         
            
            for (let index = 0;  index < 5; index++) {

                if(index+(props.object.page - 1) > props.object.totalPages){
                    continue
                }
            
                let className = ''
                if (props.object.page == index+(props.object.page - 1)) {
                    className = 'active'
                }

                paginationHtml.push(
                    <li 
                        data-index={index+(props.object.page - 1)}
                        onClick={() => {
                            props.onClick(index+(props.object.page - 1))
                            handleClick()
                        }} 
                        className={"page-item "+className}
                    >
                        <a className="page-link" onClick={handleClick}  data-index={index+(props.object.page - 1)}>{index+(props.object.page - 1)}</a>
                    </li>
                )
            }
        }

        

        if(!props.object.hasNextPage){
            paginationHtml.push(
                <li className="disabled page-item"><a className="page-link"><span className="fa fa-fast-forward"></span></a></li>
            )
        }else{
            paginationHtml.push(
                <li className="page-item"><a onClick={handleClick} data-index={(props.object.totalPages)} className="page-link"><span data-index={(props.object.totalPages)} className="fa fa-fast-forward"></span></a></li>
            )
        }

        
        
    }else{
        for (let index = 0; index < props.object.totalPages; index++) {
            if(index == 0 && !props.object.hasPrevPage){
                paginationHtml.push(
                    <li className="disabled page-item"><a className="page-link">Önceki</a></li>
                )
            }else if(index == 0){
                paginationHtml.push(
                    <li className="page-item"><a onClick={handleClick} data-index={props.object.page-1} className="page-link">Önceki</a></li>
                )
    
            }
            
            if(index+1 == state.clicked_index){
                paginationHtml.push(
                    <li 
                        data-index={index+1}
                        onClick={() => {
                            props.onClick(index+1)
                            handleClick()
                        }} 
                        className="active page-item"
                    >
                        <a className="page-link" onClick={handleClick}  data-index={index+1}>{index+1}</a>
                    </li>
                )
            }else{
    
                    paginationHtml.push(
                        <li 
                            data-index={index+1}
                            className="page-item"
                        >
                            <a className="page-link" onClick={handleClick}  data-index={index+1}>{index+1}</a>
                        </li>
                    )
                
               
            }
            
            if(index == (props.object.totalPages-1) && !props.object.hasNextPage){
    
                paginationHtml.push(
                    <li className="disabled page-item"><a className="page-link"><span className="fa fa-fast-forward"></span></a></li>
                )
            }else if(index == (props.object.totalPages-1)){
                paginationHtml.push(
                    <li className="page-item"><a onClick={handleClick} data-index={(props.object.totalPages)} className="page-link"><span className="fa fa-fast-forward"></span></a></li>
                )
            }
        }
    }

    
    

    return(
        <ul className="pagination pagination-sm add_bottom_30">
            {paginationHtml}
        </ul>
    )
}

export default Pagination