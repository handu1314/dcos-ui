let EventTypes = {};
[
  'APP_STORE_CHANGE',
  'AUTH_LOGIN_REDIRECT',
  'AUTH_USER_LOGIN_ERROR',
  'AUTH_USER_LOGIN_SUCCESS',
  'AUTH_USER_LOGOUT_ERROR',
  'AUTH_USER_LOGOUT_SUCCESS',
  'CLUSTER_CCID_SUCCESS',
  'CLUSTER_CCID_ERROR',
  'CONFIG_ERROR',
  'CONFIG_LOADED',
  'COSMOS_DESCRIBE_CHANGE',
  'COSMOS_DESCRIBE_ERROR',
  'COSMOS_INSTALL_ERROR',
  'COSMOS_INSTALL_SUCCESS',
  'COSMOS_LIST_CHANGE',
  'COSMOS_LIST_ERROR',
  'COSMOS_REPOSITORIES_ERROR',
  'COSMOS_REPOSITORIES_SUCCESS',
  'COSMOS_REPOSITORY_ADD_ERROR',
  'COSMOS_REPOSITORY_ADD_SUCCESS',
  'COSMOS_REPOSITORY_DELETE_ERROR',
  'COSMOS_REPOSITORY_DELETE_SUCCESS',
  'COSMOS_SEARCH_CHANGE',
  'COSMOS_SEARCH_ERROR',
  'COSMOS_UNINSTALL_ERROR',
  'COSMOS_UNINSTALL_SUCCESS',
  'DCOS_CHANGE',
  'DCOS_METADATA_CHANGE',
  'HEALTH_NODE_ERROR',
  'HEALTH_NODE_SUCCESS',
  'HEALTH_NODE_UNIT_ERROR',
  'HEALTH_NODE_UNIT_SUCCESS',
  'HEALTH_NODE_UNITS_ERROR',
  'HEALTH_NODE_UNITS_SUCCESS',
  'HEALTH_NODES_CHANGE',
  'HEALTH_NODES_ERROR',
  'HEALTH_UNIT_ERROR',
  'HEALTH_UNIT_NODE_ERROR',
  'HEALTH_UNIT_NODE_SUCCESS',
  'HEALTH_UNIT_NODES_ERROR',
  'HEALTH_UNIT_NODES_SUCCESS',
  'HEALTH_UNIT_SUCCESS',
  'HEALTH_UNITS_CHANGE',
  'HEALTH_UNITS_ERROR',
  'HISTORY_CHANGE',
  'METRONOME_JOB_CREATE_ERROR',
  'METRONOME_JOB_CREATE_SUCCESS',
  'METRONOME_JOB_DELETE_ERROR',
  'METRONOME_JOB_DELETE_SUCCESS',
  'METRONOME_JOB_DETAIL_CHANGE',
  'METRONOME_JOB_DETAIL_ERROR',
  'METRONOME_JOB_RUN_ERROR',
  'METRONOME_JOB_RUN_SUCCESS',
  'METRONOME_JOB_STOP_RUN_ERROR',
  'METRONOME_JOB_STOP_RUN_SUCCESS',
  'METRONOME_JOB_SCHEDULE_UPDATE_ERROR',
  'METRONOME_JOB_SCHEDULE_UPDATE_SUCCESS',
  'METRONOME_JOB_UPDATE_ERROR',
  'METRONOME_JOB_UPDATE_SUCCESS',
  'METRONOME_JOBS_CHANGE',
  'METRONOME_JOBS_ERROR',
  'MESOS_STATE_CHANGE',
  'MESOS_STATE_REQUEST_ERROR',
  'MESOS_SUMMARY_CHANGE',
  'MESOS_SUMMARY_REQUEST_ERROR',
  'METADATA_CHANGE',
  'NOTIFICATION_CHANGE',
  'SHOW_CLI_INSTRUCTIONS',
  'SHOW_VERSIONS_ERROR',
  'SHOW_VERSIONS_SUCCESS',
  'SIDEBAR_CHANGE',
  'SIDEBAR_WIDTH_CHANGE',
  'SYSTEM_LOG_CHANGE',
  'SYSTEM_LOG_REQUEST_ERROR',
  'USER_CREATE_ERROR',
  'USER_CREATE_SUCCESS',
  'USER_DELETE_ERROR',
  'USER_DELETE_SUCCESS',
  'USERS_CHANGE',
  'USERS_REQUEST_ERROR',
  'VIRTUAL_NETWORKS_CHANGE',
  'VIRTUAL_NETWORKS_REQUEST_ERROR',
  'VISIBILITY_CHANGE'
].forEach(function (eventType) {
  EventTypes[eventType] = eventType;
});

module.exports = EventTypes;
