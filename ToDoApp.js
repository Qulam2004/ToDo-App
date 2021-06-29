// yazanda ve əlave edende ne bas versin
const newInput = document.querySelector('.input')
const newAdd = document.querySelector('.elaveet-btn')

// yazilanlari secir ve ekranda göstərir
const itemContainer = document.querySelector('.item-siyahisi')

// yəni bir hadisə siyahisi duzeldirik
itemContainer.addEventListener('click', vezifeTamamlaSil)
newAdd.addEventListener('click', vezifeElaveEt)

// sonra ise tamamlasil-ə əlavəet klik edərkən nə hadisə bas versin duzeldirik

function vezifeTamamlaSil(e) {
    const klikedilenElement = e.target;
    console.log(klikedilenElement)

    if (klikedilenElement.classList.contains('vezife-btn-tamamlandi')) { // ilk sehvin buradadi class adini duzgun ver

        klikedilenElement.parentElement.classList.toggle('vezife-tamamlandi')
    }

    if (klikedilenElement.classList.contains('vezife-btn-silindi')) {

        klikedilenElement.parentElement.classList.toggle('vezife-silindi')
    }

}

function vezifeElaveEt(e) {
    e.preventDefault()

    /*
    burada ne bash verir? evvelce 
    <div class="vezife-item ">
    <li class="vezife-li">
    asdsadasdasd
    </li>
    <button class="vezife-btn vezife-btn-tamamlandi"></button>
    <button class="vezife-btn vezife-btn-silindi"></button>
    </div>
    */

    const vezifeItem = document.createElement('div')
    vezifeItem.classList.add('vezife-item')


    const vezifeItemLi = document.createElement('li')
    vezifeItemLi.classList.add('vezife-li')
    vezifeItemLi.innerText = newInput.value

    vezifeItem.appendChild(vezifeItemLi)

    const Tamamlandibtn = document.createElement('button')
    Tamamlandibtn.classList.add('vezife-btn')
    Tamamlandibtn.classList.add('vezife-btn-tamamlandi')

    Tamamlandibtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>'
    vezifeItem.appendChild(Tamamlandibtn)

    const Silindibtn = document.createElement('button')
    Silindibtn.classList.add('vezife-btn')
    Silindibtn.classList.add('vezife-btn-silindi')
    Silindibtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'

    vezifeItem.appendChild(Silindibtn)

    newInput.value = '';

    itemContainer.appendChild(vezifeItem)



}



