import React from 'react'


const TablePreviousPurchases = () => {
    return (
        <table class="table table-striped cart-list">
            <thead>
                <tr>
                    <th>ÜRÜN</th>
                    <th>ADET</th>
                    <th>İNDİRİM</th>
                    <th>FİYAT</th>
                    <th>İŞLEM</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="thumb_cart">
                            <img src="http://via.placeholder.com/150x150/ccc/fff/thumb_cart_1.jpg" alt="Image" />
                        </div>
                        <span class="item_cart">Standart Balon Turu</span>
                    </td>
                    <td>2</td>
                    <td>0%</td>
                    <td>
                        <strong>100 €</strong>
                    </td>
                    <td class="options" style={{ width: '5%', textAlign: 'center' }}>
                        <a href="#"><i class="icon-comment"></i></a>
                    </td>
                </tr>

            </tbody>
        </table>
    )
}

export default TablePreviousPurchases