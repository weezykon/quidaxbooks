export const addCart = (carts, book) => {
    // console.log(carts, book);
    if (carts.length === 0) {
        const carts = [
            {
                book,
                quantity: 1
            }
        ]
        return { carts, new: true };
    } else {
        const index = carts.findIndex(cart => {
            return cart.book.id === book.id
        });
        if (index === -1) {
            return {carts: [...carts, { book, quantity: 1 }], new: true};
        } else {
            const newCarts = [...carts];
            // check if available
            if (newCarts[index].quantity + 1 <= book.available_copies) {
                newCarts[index].quantity++;
            }
            return {carts: newCarts};
        }
    }
}

export const getValues = (items) => {
    if(items && items.length > 0) return items.map(item => item.name).join(', ')
    return ''
}
