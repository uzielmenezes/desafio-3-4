//class Carousel
class Carousel {
    constructor(src, title, href, alt) {
        this.src = src;
        this.title = title;
        this.href = href;
        this.alt = alt;
    }
    
    // função que altera classes nas divs carouselItem, criando o efeito carrossel
    static nextItem() {
                
        _items[_currentItemIndex].classList.add('unselected');
        _items[_currentItemIndex].classList.remove('selected');
        
        _currentItemIndex++;

        if(_currentItemIndex >= _items.length) {
            _currentItemIndex = 0;
        }        
        _items[_currentItemIndex].classList.remove('unselected');
        _items[_currentItemIndex].classList.add('selected');        
        
    }

    // função que chama a nextItem(), com intervalo de tempo predefinido
    static startCarousel () {
        if(_items.length > 0) {
            this._time = 5000;
            setInterval(() => {
                Carousel.nextItem();}, _time);
        } else {
            throw "Method startCarousel needs an Array Variable."
        }
    }
}

// cria instâncias da classe Carousel e os empurra para o array arr
let arr = [];
arr.push(new Carousel('img/imagem_1.jpg', 'Esta é a nova Ford Ranger 2023. Verifique novidades.', 'lancamento.html', 'Imagem Nova Ford Ranger 2022')); 
arr.push(new Carousel('img/imagem_2.jpg', 'Ford a nossa história.', '#', 'Imagem História Ford'));
arr.push(new Carousel('img/imagem_3.jpg', 'Nova Ford Bronco Sport 2023.', 'lancamento.html', 'Imagem Nova Ford Bronco Sport 2022'));

// busca a div carousel, definida no HTML
let carousel = document.querySelector('#carousel');

// cria divs baseadas na quantidade de objetos com link, imagem, texto, alt e os empurra para o array items
let _items = []; // array de divs criadas
    _currentItemIndex = 0; // index inicial do array _items

for(let i = 0; i < arr.length; i++) {
    
    let carouselItem = document.createElement('div');
    let img = document.createElement('img');
    let title = document.createElement('p');
    let link = document.createElement('a');

    // adição das classes selected para a primeira div e unselected para as demais
    if(i == 0) {
        carouselItem.setAttribute('class', 'flex-main selected');
    } else {
        carouselItem.setAttribute('class', 'flex-main unselected');
    }   

    // arquitetura da divs child da div carousel
    link.setAttribute('href', arr[i].href);
    img.setAttribute('src', arr[i].src);
    img.setAttribute('alt', arr[i].alt);
    title.innerHTML = arr[i].title;
    carousel.appendChild(carouselItem);
    carouselItem.appendChild(link);
    carouselItem.appendChild(img);
    link.appendChild(img);
    carouselItem.appendChild(title);
    _items.push(carouselItem);
}

// acionamento da função startCarousel da classe Carousel a partir do carregamento da página  
window.addEventListener('load', Carousel.startCarousel);