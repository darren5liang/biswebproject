/**
 *
 * Darren
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Liang from 'containers/Liang/Loadable';
import makeSelectDarren from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Darren() {
  useInjectReducer({ key: 'darren', reducer });
  useInjectSaga({ key: 'darren', saga });

  console.log('yurrr');

  function clickme() {
    console.log(window);
    // works
    window.$('#regTitle').html('Hello World! dude');

    const { bioimagesuiteweb } = window;
    const { bioimagesuitewasmpack } = window;
    console.log(bioimagesuiteweb);
    const { webutil } = bioimagesuiteweb;
    const bisgenericio = bioimagesuiteweb.genericio;
    console.log(webutil);
    console.log(bisgenericio);
    webutil.createAlert(`Failed to parse input file darren`, true);
    console.log('overrrr');
    const a = bioimagesuiteweb.BisWebTransformationCollection;
    console.log(a);
    const b = bioimagesuitewasmpack.BisWebElectrodeMultiGrid;
    console.log(b);
  }
  return (
    <div>
      <Helmet>
        <title>Darren</title>
        <meta name="description" content="Description of Darren" />
      </Helmet>
      <FormattedMessage {...messages.header} />

      <bisweb-topmenubar id="viewer_menubar" />
      <div className="bisviewerwidget">
        <bisweb-viewerlayoutelement
          id="viewer_layout"
          bis-dockwidth="300"
          bis-coreopen="true"
          bis-fixed="1"
          bis-webgl="2"
          bis-defaulttext=""
        />

        <bisweb-orthogonalviewer
          id="viewer"
          bis-volumerendering="1"
          bis-layoutwidgetid="#viewer_layout"
        />

        <bisweb-snapshotelement
          bis-layoutwidgetid="#viewer_layout"
          bis-dowhite="false"
          bis-viewerid="#viewer"
        />

        <bisweb-electrodegridcontrolelement
          bis-layoutwidgetid="#viewer_layout"
          bis-viewerid="#viewer"
          id="electrodeviewer"
        />

        <bisweb-modulemanager
          id="modulemanager"
          bis-mode="single"
          bis-layoutwidgetid="#viewer_layout"
          bis-viewerid="#viewer"
        />

        <bisweb-newcomponent
          bis-layoutwidgetid="#viewer_layout"
          bis-viewerid="#viewer"
        />
        <Liang />

        <bisweb-viewerapplication
          id="viewer_application"
          bis-menubarid="#viewer_menubar"
          bis-graphelementid="#bisweb_graphelement"
          bis-dicomimportid="#dicom_import"
          bis-modulemanagerid="#modulemanager"
          bis-viewerid="#viewer"
          bis-filetreepipelineid="#filetreepipeline"
        />
      </div>
      <bisweb-botmenubar />
      <h1>hidude</h1>
      <div id="regTitle">up dude</div>
      <button type="button" onClick={clickme}>
        hi
      </button>
    </div>
  );
}

Darren.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  darren: makeSelectDarren(),
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
)(Darren);
