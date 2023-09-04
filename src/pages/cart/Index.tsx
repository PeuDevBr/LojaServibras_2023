// import { RiWhatsappFill } from 'react-icons/ri'
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiFillCloseCircle,
} from 'react-icons/ai'
import { ModalContainer, TitleContainer } from '../../styles/pages/Cart'
import { useContext } from 'react'
import { ProductsContext } from '../../context/productsContext'

export default function Cart() {
  const { cartList, updateProductQuantity, removeProduct } =
    useContext(ProductsContext)

  /* const [cart, setCart] = useState(cartList) */
  // const cartSize = cart.length

  /* const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.amount),
    subTotal: formatPrice(product.amount * product.quantity),
  })) */

  /* const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      sumTotal += product.amount * product.quantity

      return sumTotal
    }, 0),
  ) */

  /* 
  } */

  /* const updateProductQuantity = ({ productCode, newQuantity }) => {
    const productExists = cart.some(
      (cartProduct) => cartProduct.code === productCode,
    )

    if (productExists) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.code === productCode
          ? {
              ...cartItem,
              quantaty: newQuantity,
            }
          : cartItem,
      )

      setCart(updatedCart)
    }
  } */

  const handleUpdateProductQuantity = ({ productCode, newQuantity }) => {
    updateProductQuantity(productCode, newQuantity)
  }

  const handleRemoveProduct = (productCode: string) => {
    removeProduct(productCode)
  }

  return (
    <div>
      <TitleContainer className="buttonContainer">
        <h3>Lista de Orçamento</h3>
      </TitleContainer>
      <ModalContainer>
        {cartList.map((product) => {
          return (
            <div className="content" key={product.code}>
              <div className="firstDiv">
                <img
                  src={`/images/productsImg/${product.code}.png`}
                  alt={product.name}
                />
                <p className="code">{product.code} </p>
                <p className="description">{product.name.toUpperCase()} </p>
              </div>

              <div className="secondDiv">
                <div className="changeAmountButtons">
                  <button
                    className="DecrementButton"
                    type="button"
                    disabled={product.quantaty <= 1}
                    onClick={() => {
                      const DecrementArguments = {
                        productCode: product.code,
                        newQuantity: product.quantaty - 1,
                      }
                      handleUpdateProductQuantity(DecrementArguments)
                    }}
                  >
                    <AiOutlineMinusCircle size={28} />
                  </button>
                  <p className="amount">
                    {product.quantaty <= 9
                      ? `0${product.quantaty}`
                      : `${product.quantaty}`}
                  </p>
                  <button
                    className="incrementButton"
                    onClick={() => {
                      const IncrementArguments = {
                        productCode: product.code,
                        newQuantity: product.quantaty + 1,
                      }
                      handleUpdateProductQuantity(IncrementArguments)
                    }}
                  >
                    <AiOutlinePlusCircle size={28} />
                  </button>
                </div>

                <button
                  className="trashButton"
                  type="button"
                  onClick={() => {
                    handleRemoveProduct(product.code)
                  }}
                >
                  <AiFillCloseCircle size={30} />
                </button>
              </div>
            </div>
          )
        })}
        {/* <div className="sendDiv">
          <button
            type="button"
            onClick={() => {
              let title = 'Olá, quero solicitar a seguinte peça: '

              if (cartSize > 1) {
                title = 'Olá, quero solicitar as seguintes peças: '
              }

              let texto = `
              ${title}
              ${cartFormatted.map((product) => {
                return (
                  ' \n ' +
                  product.code +
                  ' - ' +
                  product.name +
                  ' - ' +
                  product.priceFormatted +
                  ' - ' +
                  product.quantity +
                  ' unid.' +
                  ' - ' +
                  product.subTotal +
                  ' \n '
                )
              })} 
          Total: ${total}`
              if (cartSize > 0) {
                texto = window.encodeURIComponent(texto)
                window.open(
                  'https://api.whatsapp.com/send?phone=' +
                    '558299953-6836' +
                    '&text=' +
                    texto,
                  '_blank',
                )
              } else {
                Message('Carrinho vazio.', 'warn')
              }
            }}
          >
            <span>{cartSize > 1 ? 'Solicitar Peças' : 'Solicitar Peça'}</span>
            <RiWhatsappFill size={30} />
          </button>
          <h4>{total}</h4>
        </div> */}
      </ModalContainer>
    </div>
  )
}
