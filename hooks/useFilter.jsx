import React from 'react'

export default function useFilter(countriesData, query) {
    console.log(countriesData)
    return (countriesData.filter((country) => {
        return country.name.common.toLowerCase().includes(query)
    }))
}
