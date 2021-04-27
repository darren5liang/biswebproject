/**
 *
 * Liang
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLiang from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Liang() {
  useInjectReducer({ key: 'liang', reducer });
  useInjectSaga({ key: 'liang', saga });

  const [selectedFile, setSelectedFile] = useState();

  const bisweb = window.bioimagesuiteweb;

  const BisWebPanel = bisweb.biswebpanel;

  console.log(selectedFile);

  function initialize(viewer) {
    const btn = window.$('#example2');

    btn.click(e => {
      console.log('Help', e);
      e.preventDefault();

      /*  let img = new bisweb.BisWebImage();
      img
        .load(
          'https://bioimagesuiteweb.github.io/unstableapp/images/MNI_T1_2mm_stripped_ras.nii.gz',
        )
        .then(() => {
          viewer.setimage(img);
        }); */
      // https://github.com/bioimagesuiteweb/bisweb/blob/devel/js/webcomponents/bisweb_orthogonalviewerelement.js
      console.log('YOOO========');
      console.log(viewer);
      console.log(viewer.getobjectmapcoordinates());
      console.log(viewer.getimage());

      // let viewer2 = document.querySelector('#electrodeviewer');
      viewer.setRenderMode(5);

      const electrodeviewer = document.querySelector('#electrodeviewer');
      console.log(electrodeviewer);

      console.log(electrodeviewer.internal.multigrid);
      console.log(electrodeviewer.internal.multigrid.getDescription());
      console.log(electrodeviewer.internal.multigrid.getNumGrids());

      const grid = electrodeviewer.internal.multigrid.getGrid(0);
      console.log(JSON.stringify(grid, null, 2));
      const electrode = grid.electrodes[0];
      console.log(electrode);
      electrode.position = [0, 0, 0];
      electrodeviewer.updateMeshes(true);

      // electrodeviewer.cleanUpMeshes();
      // console.log('*****');
      // console.log(selectedFile);
      // electrodeviewer.loadMultiGrid('PatientElectrodes_NativeSpace.mgrid');
      // electrodeviewer.cleanUpMeshes();
      // electrodeviewer.selectElectrode(1, true);
      console.log('nice here');
      console.log(window.bioimagesuiteweb);
      console.log(electrodeviewer.getInitialSaveFilename());
      console.log(electrodeviewer.getElementState());

      console.log('===');

      // not sure if right
      /*  electrodeviewer
        .multisnapshot()
        .then(value => {
          console.log(value + ' is the result');
        })
        .catch(err => {
          console.log(err);
        }); */

      // easy wins
      // https://github.com/bioimagesuiteweb/bisweb/blob/devel/js/webcomponents/bisweb_electrodegridelement.js
    });
  }

  function upload() {
    window.$('#fileToUpload').on('change', function() {
      console.log(this.files[0]);
      setSelectedFile(this.files[0]);

      console.log('byoo');
    });
  }

  useEffect(() => {
    console.log('====44444====');
    const viewerid = '#viewer';
    const layoutid = '#viewer_layout';
    const layoutcontroller = document.querySelector(layoutid);
    const viewer = document.querySelector(viewerid);
    console.log(layoutcontroller);
    const panel = new BisWebPanel(layoutcontroller, {
      name: 'Upload electrode',
      permanent: true,
      width: '290',
      dual: false,
    });
    console.log(panel);
    const parentDomElement = panel.getWidget(); // JQuery Object that you can put your own stuff in
    const html = `
    <HR>
    <H1>Hello</H1>
    This is my favorite applicationSTTTTT. See <B>HI</B>.
    
    <button type="button" class="btn-alert btn-sm" id="example2">Do Somehting</button>
    <input type="file" name="file" id="fileToUpload"/>
    
    </HR>`; // Multiline string use ` delimiter '''

    parentDomElement.append(html);
    panel.show();

    setTimeout(() => {
      initialize(viewer);
      upload();
    }, 1000);
  });

  return (
    <div>
      <Helmet>
        <title>Liang</title>
        <meta name="description" content="Description of Liang" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <div>dude</div>
    </div>
  );
}

Liang.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  liang: makeSelectLiang(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Liang);
