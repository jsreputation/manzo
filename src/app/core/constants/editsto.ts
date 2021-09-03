export const editSto = [
    {
        type: 'checkbox',
        id: 'openclose',
        on: 'STO is Open',
        off: 'STO is Closed'
    },
    {
        type: 'checkbox',
        id: 'pause',
        on: 'STO is Paused',
        off: 'STO not Paused'
    },
    {
        type: 'checkbox',
        id: 'issuable',
        on: 'STO is Issuable',
        off: 'STO not Issuable'
    },
    {
        type: 'checkbox',
        id: 'cap',
        on: 'Cap is Reached',
        off: 'Cap is not Reached'
    },
    {
        type: 'normal',
        label: 'Token Minted',
        placeholder: 'Tokens Minted Amount'
    },
    {
        type: 'normal',
        label: 'Tokens Sold',
        placeholder: 'Tokens Sold Amount'
    }
];