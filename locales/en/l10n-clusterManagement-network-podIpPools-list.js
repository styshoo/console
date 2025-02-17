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
  POD_IP_POOL_PL: 'Pod IP Pools',
  POD_IP_POOL_DESC:
    'Pod IP pools is used to manage the Pod network address space in the cluster. You can create Pod IP pools based on your needs.',
  IPPOOL_USAGE_Q: 'How do I manage a Pod network using a Pod IP pool?',
  IPPOOL_USAGE_A:
    'A Pod IP pool is used to manage the Pod network address space, and the address spaces between different Pod IP pools cannot overlap. When creating a workload, you can select a specific Pod IP pool to assign IP addresses from this Pod IP pool to the created Pods.',

  // List
  POD_IP_POOL_EMPTY_DESC: 'Please create a Pod IP pool.',
  TOTAL_VALUE: 'Total: {value}',
  ALL: 'All',
  NOT_ASSIGNED: 'Not assigned',

  // List > Create
  CREATE_POD_IP_POOL: 'Create Pod IP Pool',
  NETWORK_SEGMENT: 'Network Segment',
  USED_IP_ADDRESSES: 'Used IP Addresses',
  NUMBER_OF_CREATION_TCAP: 'Number of Creation',
  IP_POOL_CREATE_DESC: 'Pod IP Pools to be Created',
  IP_ADDRESS_EMPTY_DESC: 'Please enter an IP address.',
  MASK_TIP: 'Please enter a mask.',
  ENTER_NETWORK_SEGMENT_TIP: 'Please enter a network segment.',
  IP_POOL_NUM_TIP: 'Please enter the number of Pod IP pools to be created.',
  IP_POOL_CREATE_COUNT_DESC:
    'Up to 10 Pod IP pools can be created at the same time.',

  // List > Edit Information
  // List > View YAML
  // Assign Workspace
  IPPOOL_ASSIGN_WORKSPACE_DESC: 'Assign the Pod IP pool to a workspace.',
  IPPOOL_ASSIGN_WORKSPACE_ALLOCATED_WARNING:
    'The Pod IP pool is in use and cannot be assigned to another specific workspace.',
  IPPOOL_ASSIGN_WORKSPACE_CHANGE_WARNING:
    'The Pod IP pool is in use with a specific workspace assigned. The workspace cannot be changed.',
  ASSIGN_WORKSPACE: 'Assign Workspace',
  SELECT_WORKSPACE_DESC: 'Select a workspace.',

  // List > Delete
}
