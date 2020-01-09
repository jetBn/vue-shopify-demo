<template>
  <div>
    <polaris-layout-section>
      <polaris-button>
        <router-link to="/" tag="span">Home</router-link>
      </polaris-button>
         <polaris-button>
        <router-link to="/set" tag="span">err</router-link>
      </polaris-button>
    </polaris-layout-section>
    <polaris-layout-section>
      <polaris-display-text element="h2" size="large">
        Demo Page
      </polaris-display-text>
    </polaris-layout-section>
    <polaris-layout-section>
      <polaris-card 
          sectioned>
        <polaris-card-section>
          <p>Hello World</p>
        </polaris-card-section>
        <polaris-card-section>
          <p>Hello World</p>
        </polaris-card-section>
        <polaris-card-section>
          <table class="table-hover expanded product-index-table" width="100%" style="text-align: left">
            <thead>
              <tr>
                <th></th>
                <th width="34%">Product</th>
                <th width="14%">Stock</th>
                <th width="19%">Type</th>
                <th width="19%">Vendor</th>
                <th width="10%"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>Demo product 1</td>
                <td>1</td>
                <td>Shoes</td>
                <td>Demo Sports</td> 
                <td>
                  <polaris-button primary @click="testAlert()">
                    Action
                  </polaris-button>
                </td>
              </tr>
            </tbody>
          </table>
        </polaris-card-section>
        <polaris-card-sectio>
          <polaris-resource-list
            :items="[
                {
                    url: '#',
                    attributeOne: 'How to Get Value from Wireframes',
                    attributeTwo: 'by Jonathan Mangrove',
                    attributeThree: 'Today, 7:14pm',
                },
                {
                    url: '#',
                    attributeOne: 'Test blog post',
                    attributeTwo: 'by Jonathan Mangrove',
                    attributeThree: 'Jan 14, 2016, 8:24am',
                    badges: [
                        {content: 'Hidden'},
                    ],
                },
            ]">
          </polaris-resource-list>
        </polaris-card-sectio>
      </polaris-card>
    </polaris-layout-section>
  </div>
</template>

<script>
export default {
  methods: {
    testAlert() {
      // alert('clicked')
      this.$router.push({path: '/set'})
      console.log(this.$router)
    }
  }
}
</script>

<style>

</style>