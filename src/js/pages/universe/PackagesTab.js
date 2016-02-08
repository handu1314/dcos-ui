import {Modal} from 'reactjs-components';
import React from 'react';

import MultipleForm from '../../components/MultipleForm';
import Panel from '../../components/Panel';
import UniversePackagesList from '../../structs/UniversePackagesList';

// TODO (mlunoe): Remove the following mock data!
let packages = new UniversePackagesList({items: [
  {
      'currentVersion': '1.5.0',
      'description': 'A clust-wide init system and control system for services in cgroups or Docker containers.',
      'framework': true,
      'packageName': 'Marathon',
      'resources': {
        'images': {
          'icon-small': 'https://downloads.mesosphere.com/marathon/assets/icon-service-marathon-small.png',
          'icon-medium': 'https://downloads.mesosphere.com/marathon/assets/icon-service-marathon-medium.png',
          'icon-large': 'https://downloads.mesosphere.com/marathon/assets/icon-service-marathon-large.png'
        }
      },
      'tags': [
          'marathon',
          'dcos',
          'init',
          'framework'
      ],
      'versions': {
          '1.5.0': '0'
      }
  },
  {
      'currentVersion': '0.2.1',
      'description': 'A distributed free and open-source database with a flexible data model for documents, graphs, and key-values. Build high performance applications using a convenient SQL-like query language or JavaScript extensions.',
      'framework': true,
      'packageName': 'arangodb',
      'resources': {
        'images': {
          'icon-small': 'https://downloads.mesosphere.com/marathon/assets/icon-service-marathon-small.png',
          'icon-medium': 'https://downloads.mesosphere.com/marathon/assets/icon-service-marathon-medium.png',
          'icon-large': 'https://downloads.mesosphere.com/marathon/assets/icon-service-marathon-large.png'
        }
      },
      'tags': [
          'arangodb',
          'NoSQL',
          'database',
          'framework'
      ],
      'versions': {
          '0.2.1': '0'
      }
  },
  {
      'currentVersion': '0.2.0-1',
      'description': 'Apache Cassandra running on Apache Mesos',
      'framework': true,
      'packageName': 'cassandra',
      'tags': [
          'data',
          'database',
          'nosql'
      ],
      'versions': {
          '0.2.0-1': '0'
      }
  },
  {
      'currentVersion': '2.4.0',
      'description': 'A fault tolerant job scheduler for Mesos which handles dependencies and ISO8601based schedules.',
      'framework': true,
      'packageName': 'chronos',
      'tags': [
          'cron',
          'analytics',
          'batch'
      ],
      'versions': {
          '2.4.0': '0'
      }
  },
  {
      'currentVersion': '0.1.7',
      'description': 'Hadoop Distributed File System (HDFS), Highly Available',
      'framework': true,
      'packageName': 'hdfs',
      'tags': [
          'filesystem',
          'hadoop',
          'analytics'
      ],
      'versions': {
          '0.1.7': '0'
      }
  }
]});

const METHODS_TO_BIND = ['handleButtonClick', 'handleAdvancedModalClose'];

class PackagesTab extends React.Component {
  constructor() {
    super();

    this.state = {
      advancedModalOpen: false
    };

    METHODS_TO_BIND.forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  handleOpenDetail(pkg, event) {
    event.stopPropagation();
    // Handle open detail view
  }

  handleOpenInstallModal(pkg, event) {
    event.stopPropagation();
    // Handle open install modal
  }

  handleButtonClick() {
    this.setState({advancedModalOpen: true});
  }

  handleAdvancedModalClose() {
    this.setState({advancedModalOpen: false});
  }

  getFooter(pkg) {
    return (
      <button
        className="button button-success"
        onClick={this.handleOpenInstallModal.bind(this, pkg)}>
        Install Package
      </button>
    );
  }

  getHeading(pkg) {
    return (
      <div className="icon icon-jumbo icon-image-container icon-app-container">
        <img src={pkg.getIcons()['icon-large']} />
      </div>
    );
  }

  getPackages() {
    return packages.getItems().map((pkg, index) => {
      return (
        <div
          className="grid-item column-small-6 column-medium-4 column-large-3"
          key={index}>
          <Panel
            className="panel clickable"
            contentClass="panel-content horizontal-center short"
            footer={this.getFooter(pkg)}
            footerClass="panel-footer horizontal-center panel-footer-no-top-border short"
            heading={this.getHeading(pkg)}
            headingClass="panel-heading horizontal-center"
            onClick={this.handleOpenDetail.bind(this, pkg)}>
            <div className="h2 inverse flush-top short-bottom">
              {pkg.get('packageName')}
            </div>
            <p className="inverse flush-bottom">
              {pkg.get('currentVersion')}
            </p>
          </Panel>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="grid row">
        <button
          className="button button-success"
          onClick={this.handleButtonClick}>
          Open Advanced Configuration
        </button><br/>
        {this.getPackages()}
        <Modal
          modalWrapperClass="modal-generic-error"
          modalClass="modal modal-large"
          maxHeightPercentage={0.9}
          onClose={this.handleAdvancedModalClose}
          open={this.state.advancedModalOpen}
          showCloseButton={false}
          showHeader={false}
          showFooter={false}
          titleClass="modal-header-title text-align-center flush">
          <MultipleForm />
        </Modal>
      </div>
    );
  }
}

module.exports = PackagesTab;
