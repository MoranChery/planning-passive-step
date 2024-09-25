import React from 'react';

 class AdComponent extends React.Component {
    componentDidMount () {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-5506831364779263'
          data-ad-slot='12121212'
          data-ad-format='auto' />
    );
  }
}

export default AdComponent;