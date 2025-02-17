/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

module.exports = {
  // Banner
  // List
  STATEFULSET_EMPTY_DESC: 'Please create a statefulset.',

  // List > Edit Information
  // List > Edit YAML
  // List > Delete
  // List > Create
  // List > Create > Basic Information
  // List > Create > Pod Settings
  POD_SETTINGS: 'Pod Settings',
  POD_REPLICAS: 'Pod Replicas',
  ONDELETE: 'Update on Deletion',
  ONDELETE_DESC: 'Updates Pod replicas only when they are manually deleted.',
  PARTITION_ORDINAL: 'Ordinal for Dividing Pod Replicas',
  PARTITION_ORDINAL_DESC:
    'Set an ordinal to divide the Pod replicas into two groups. When the StatefulSet is updated, only Pod replicas with an ordinal greater than or equal to the value of this parameter are updated.',

  // List > Create > Volume Settings > Volume Templates
  ADD_VOLUME_TEMPLATE_DESC:
    'Add a volume template to mount a volume with the same lifecycle as the Pod.',
  STATEFULSETS_ADD_VOLUME_TEMPLATE_DESC: 'Please add a volume template',
  VOLUME_CAPACITY_TCAP: 'Volume Capacity',
  MOUNT_PATH: 'Mount path',
  MOUNT_VOLUME_OR_TEMPLATE: 'Mount Volume or Volume Template',
  VOLUME_TEMPLATES: 'Volume Templates',

  // List > Create > Advanced Settings
  // List > Create > Cluster Differences
  SERVICE_PORT: 'Service Port',
  SERVICE_PORT_VALUE: 'Service Port: {value}',

  // List > Create > Cluster Differences (Displayed after you add a volume template)
  VOLUME_TEMPLATE_SETTINGS: 'Volume Template Settings',
  CLUSTER_VOLUME_DIFF_DESC:
    'Use different storage settings in different clusters.',

  // Customize Columns
}
