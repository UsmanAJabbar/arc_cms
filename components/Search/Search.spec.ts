import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Search } from '~/.nuxt/components';

describe('Search', () => {
  it('creates a valid Search Component', () => {
    const PLACEHOLDER = 'Search for an item';
    const wrapper = mount(Search, {
      props: {
        placeholder: 'Search for an item',
      },
    });
    const component = wrapper.vm;

    expect(wrapper).toBeTruthy();
    expect(wrapper.vm).toBeTruthy();
  });
});
