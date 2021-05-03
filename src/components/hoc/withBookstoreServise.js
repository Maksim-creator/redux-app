import React from 'react'
import {Consumer} from '../serviceContext';

const withBookstoreServise = () => (Wrapped) => {
    return (props) => {
        return (
            <Consumer>
                {
                    (booksStoreService => {
                        return (
                            <Wrapped {...props} booksstoreService={booksStoreService} />
                        )
                    })
                }
            </Consumer>
        )
    }
}

export default withBookstoreServise