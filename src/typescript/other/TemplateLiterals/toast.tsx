type HorizontalPosition = "left" | "center" | 'right'
type VerticalPosition = "top" | "center" | 'bottom'


// TYPESCRIPT fez todas as combinaõs possíveis
type ToastProps = { 

    // Aqui removemos a redundância do center-center, adicionando so o  center
    position :  Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

export const Toast = ({position}: ToastProps) => {
    
    return(
        <div>Toast Notification Position: {position} </div>
    )
}