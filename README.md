Thermostat
==================

```
                  __________________________________________________
          ___.-"":":":":":":":":":":":":":":":":":":":":":":":":":":":-.
        (____:===='===='===='===='===='===='=A  '    '    '    '    '   )
            `'-._10___20___30___40___50___60___70___80___90__100__110.-`
            
```

## Afternoon challenge: Thermostat
In this challenge we learned & implementing the follwoing practices while pair programming:

- Introduction to JavaScrit and API's
- Making Ajax requests
- Agile Methology for user stories
- Separating frontend concerns into model, view and controller.
- Feature and Unit testing with Jasmine
- Manipulating the Document Object Model (DOM)

Goals:
- Test-drive a simple Javascript program using Node.
- Explain how asynchronous programming is different from synchronous, blocking programming.
- Apply a coherent process to learn a new language.

## Setup

1. **Fork** this [Bookmarker repository](https://github.com/CorinneBosch/Bookmarker/) 
2. Then clone **your** fork to your computer.
3. Ensure you have `Ruby` and `rspec` installed. Check ruby version with `ruby -v`
4. Install bundler if you haven't already.
`gem install bundler`
5. Install the gems required by this repository.
`bundle install`

## Interact with the program

Open the application in your terminal with `open view/index.html`

A new browser window will open up automatically.
Now you can play around with your temperatures or check out the weather forecast of different cities!

## Run test 

To run all tests open SpecRunner in your directoy, this will open a new browser window where all tests are displayed. 

```
$ open SpecRunner.html
```

## Thermostat Specifications:
```
• Thermostat starts at 20 degrees

• You can increase the temperature with an up function

• You can decrease the temperature with a down function

• The minimum temperature is 10 degrees

• If power saving mode is on, the maximum temperature is 25 degrees

• If power saving mode is off, the maximum temperature is 32 degrees

• Power saving mode is on by default but it can also be turned off

• You can reset the temperature to 20 with a reset function

• You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.

• In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.

• You can check the current weather forecast of London

• You can search for the weather forecast of any city
```
Source of challege requirements: [Makersacadeny - GitHub](https://github.com/makersacademy/course/blob/main/bookmark_manager/)
