export default function jsx4(){
    const subtitulo = 'estou no javascript'
    const trechoH3 = <h3>{3*3}</h3>

        return (

        <div>
            <h1>Integração js e jsx</h1>
            <h2>{subtitulo}</h2>
            {trechoH3}
            <h3>{Math.max(13,35)}</h3>
            <h5>{entre(9.6,1,10)}</h5>
        </div>
    )
}

function entre(valor,min,max){
    if(valor >= min && valor <= max){
        return "sim"
    }else{
        return "não"
    }
}