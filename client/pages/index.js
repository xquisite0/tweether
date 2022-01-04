import React from 'react'
import Page from "../components/Layout"
import Center from "../components/Layout"
import Button from "../components/Button"
import MetaMaskIcon from "../icons/metamask.svg"
import Modal from "../components/Modal"


export default class IndexPage extends React.Component {
  state = {
    showRegisterModal: false,
  }

  // And this method:
  toggleRegisterModal = async () => {
    const { showRegisterModal } = this.state

    this.setState({
      showRegisterModal: !showRegisterModal,
    })
  }

  render() {
    const { showRegisterModal } = this.state

    return (
      <Page>
        <Center>
          <h2>
            A <mark>decentralized</mark>, <mark>uncensorable</mark> Twitter clone built on Ethereum
          </h2>

          <div className="right-side">

            <Button style={{
              paddingLeft: 64, 
            }} onClick={this.toggleRegisterModal}>
              <MetaMaskIcon />
              Create your account
            </Button>

            <div className="disclaimer">
              <p>
                MetaMask will automatically open and ask you to confirm a transaction.
              </p>
              <p>
                Please note that creating an account on the Ethereum blockchain costs a small amount of Ether.
              </p>
            </div>
          </div>
        </Center>

        {/* Add the Modal component: */}
        {showRegisterModal && (
          <Modal
            onClose={this.toggleRegisterModal}
          >
            Here's our modal!
          </Modal>
        )}

        <style jsx global>{`
          html, body {
            min-height: 100%;
          }
          body {
            background-color: #262740;
            background-image: url("/static/images/landing-bg.jpg");
            background-size: cover;
            background-position: center center;
          }
        `}</style>

        <style jsx>{`
          h2 {
            font-size: 50px;
            color: #FFFFFF;
            line-height: 78px;
            position: relative;
            text-transform: uppercase;
            max-width: 520px;
            display: inline-block;
          }
          mark {
            color: inherit;
            background-color: #9F99EC;
            padding: 0 7px;
          }
          .right-side {
            float: right;
            position: relative;
            max-width: 320px;
            text-align: center;
            margin-top: 120px;
          }
          .right-side :global(svg) {
            position: absolute;
            margin-left: -46px;
            margin-top: -8px;
          }
          .disclaimer {
            font-size: 14px;
            color: rgba(255,255,255,0.8);
            line-height: 23px;
            font-weight: 400;
            margin-top: 23px;
          }
        `}</style>
      </Page>
    )
  }
}