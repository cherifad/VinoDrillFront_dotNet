import { mount } from "@vue/test-utils";
import { findByText } from "@testing-library/vue";
import ContactView from "@/components/views/ContactView.vue";

describe("ContactView", () => {
    test("shows message when button is clicked", async () => {
      const wrapper = mount(ContactView);
  
      const button = await findByText(wrapper.element, "Envoyer");
      // Simulate a click on the button
      await button.trigger("click");
  
      // Assert that the message is displayed
      expect(wrapper.find("p").text()).toContain("Votre message possède une erreur ! ");
    });
  });
