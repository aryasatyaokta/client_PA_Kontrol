import React from 'react'

export default function ResultTable() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <table className='items-center justify-center w-5/6 p-3 text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-center text-gray-100 uppercase bg-[#9A3B3B] dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th>Name</th>
                    <th>Attempts</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-center font-medium'>
                    <td>Aryasatya</td>
                    <td>03</td>
                    <td>Berhasil</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
