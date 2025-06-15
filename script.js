calcular = () =>
{
    let num = document.querySelector('#txtnum')
    let res = document.querySelector('#res')

    if( num.value != 0 )
    {
        for( let i = 0; i <= 10; i++ )
        {
            res.innerHTML += `${i} x ${num.value} = ${i*num.value} <br>`
        }
    } else {
        alert('[ERRO] Favor, insira um número.')
    }
}

function limpar()
{
    let input = document.querySelector('#txtnum')
    let res = document.querySelector('#res')

    input.value = ''
    res.innerHTML = ``
}