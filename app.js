document.addEventListener('alpine:init', () => {
    Alpine.data('gitar', () => ({
        items: [
            { id: 1, name: 'Fender Stratocaster', img: 'assets/gitar/strat.jpg', price: '25000000'},
            { id: 2, name: 'Gibson Les Paul', img: 'assets/gitar/LESPAUL.jpg', price: '35000000' },
            { id: 3, name: 'PRS SE  Standard satin', img: 'assets/gitar/PRS.jpg', price: '8500000' },
            { id: 4, name: 'LTD Viper', img: 'assets/gitar/Viper.jpg', price: '3400000' },
            { id: 5, name: 'Jackson Kelly', img: 'assets/gitar/Jackson.jpg', price: '35600000' },
            { id: 6, name: 'Ibanez PIA', img: 'assets/gitar/ibanez.jpg', price: '55000000' },
        ],
    }));
});

document.addEventListener('alpine:init', () => {
    Alpine.data('bass', () => ({
        items: [
            { id: 1, name: 'Fender  Precision Bass', img: 'jazzbass.jpg', price: '21500000'},
            { id: 2, name: 'Rickenbacker 4003W', img: 'ricken.jpg', price: '64000000' },
            { id: 3, name: 'Hofner Violin Bass H500 64 Relic', img: 'hofner.jpg', price: '16400000' },
            { id: 4, name: 'Gibson Thunderbird Bass', img: 'thunder.jpg', price: '45000000' },
        ],
    }));
});
    
document.addEventListener('alpine:init', () => {
    Alpine.data('mic', () => ({
        items: [
            { id: 1, name: 'Shure SM58', img: 'shure.jpg', price: '2500000'},
            { id: 2, name: 'Zoom ZUM-2', img: 'zoom.jpg', price: '2000000' },
        ],
     }));
});
    
document.addEventListener('alpine:init', () => {
    Alpine.data('iem', () => ({
        items: [
            { id: 1, name: 'Moondrop CHU 2', img: 'chu.jpg', price: '500000'},
            { id: 2, name: 'Knowledge Zenith KX EDX Pro', img: 'edx.jpg', price: '150000' },
        ],
    }));
});

document.addEventListener('alpine:init', () => {
    Alpine.data('drum', () => ({
        items: [
            { id: 1, name: 'Ludwig BreakBeats', img: 'break.jpg', price: '14500000'},
        ],
    }));
});

document.addEventListener('alpine:init', () => {
    Alpine.data('key', () => ({
        items: [
            { id: 1, name: 'Yamaha CK-61', img: 'psx.jpg', price: '12999999'},
            { id: 1, name: 'Roland RD-2000 EX', img: 'rd200.jpg', price: '49599000'},
        ],
    }));
});

document.addEventListener('alpine:init', () => {
    Alpine.data('violin', () => ({
        items: [
            { id: 1, name: 'Hofner Violin H225', img: 'h255.jpg', price: '85900000'},
        ],
    }));
});

document.addEventListener('alpine:init', () => {
    Alpine.data('mixer', () => ({
        items: [
            { id: 1, name: 'Yamaha DM7', img: 'dm7.jpg', price: '475000000'},
        ],
    }));

    Alpine.store('shop', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            const price = Number(newItem.price);
            const cartItem = this.items.find((item) => item.id === newItem.id);

            if(!cartItem) {
                this.items.push({...newItem, quantity: 1, total: Number(newItem.price)});
                this.quantity++;
                this.total += Number(newItem.price);
            } else {
                this.items = this.items.map((item) => {
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += Number(item.price);
                        return item;
                    }
                })
            }


        },
        remove(id) {
            const cartItem = this.items.find((item) => item.id ===id);

            if(cartItem.quantity > 1) {
                this.items = this.items.map((item) => {
                    if(item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if (cartItem.quantity === 1) {
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }

    });
});
//konversi 
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number)
};
