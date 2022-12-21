import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import PropTypes from 'prop-types';

const Profile = props => {
    console.log(props)
  return (
    <div className="vh-100" style={{ backgroundColor: '#9de2ff'}}>
      <MDBContainer>
        <MDBRow className="justify-content-center" style={{width: '400px', borderRadius: '200px'}}>
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px'}}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px', margin: '50px'}}
                      src={props.data.url}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3" style={{ backgroundColor: '#efefef' }}>
                    <MDBCardTitle>{props.data.name}</MDBCardTitle>
                    <MDBCardText>{props.data.profession}</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <h3 className="small text-muted mb-1">Articles</h3>
                        <p className="mb-0">{props.data.articles}</p>
                      </div>
                      <div className="px-3">
                        <h3 className="small text-muted mb-1">Followers</h3>
                        <p className="mb-0">{props.data.followers}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}
Profile.defaultProps = {
  name: 'Rawya Mars',
    profession: 'Senior Journalist',
    url: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
    followers:54,
    articles:4
}
Profile.propTypes = {
  name: PropTypes.string
};
console.log(Profile.defaultProps)
export default Profile